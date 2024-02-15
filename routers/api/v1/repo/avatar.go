// Copyright 2023 The Gitea Authors. All rights reserved.
// SPDX-License-Identifier: MIT

package repo

import (
	"encoding/base64"
	"net/http"

	"code.gitea.io/gitea/modules/context"
	api "code.gitea.io/gitea/modules/structs"
	"code.gitea.io/gitea/modules/web"
	repo_service "code.gitea.io/gitea/services/repository"
)

// UpdateVatar updates the Avatar of an Repo
func UpdateAvatar(ctx *context.APIContext) {
	// swagger:operation POST /repos/{owner}/{repo}/avatar repository repoUpdateAvatar
	// ---
	// summary: Update avatar
	// produces:
	// - application/json
	// parameters:
	// - name: owner
	//   in: path
	//   description: owner of the repo
	//   type: string
	//   required: true
	// - name: repo
	//   in: path
	//   description: name of the repo
	//   type: string
	//   required: true
	// - name: body
	//   in: body
	//   schema:
	//     "$ref": "#/definitions/UpdateRepoAvatarOption"
	// responses:
	//   "201":
	//     description: response when updating a avatar
	//   "400":
	//     "$ref": "#/responses/error"
	//   "404":
	//     "$ref": "#/responses/notFound"
	form := web.GetForm(ctx).(*api.UpdateRepoAvatarOption)

	content, err := base64.StdEncoding.DecodeString(form.Image)
	if err != nil {
		ctx.Error(http.StatusBadRequest, "DecodeImage", err)
		return
	}

	err = repo_service.UploadAvatar(ctx, ctx.Repo.Repository, content)
	if err != nil {
		ctx.Error(http.StatusInternalServerError, "UploadAvatar", err)
		return
	}

	ctx.Status(http.StatusCreated)
}

// UpdateAvatar deletes the Avatar of an Repo
func DeleteAvatar(ctx *context.APIContext) {
	// swagger:operation DELETE /repos/{owner}/{repo}/avatar repository repoDeleteAvatar
	// ---
	// summary: Delete avatar
	// produces:
	// - application/json
	// parameters:
	// - name: owner
	//   in: path
	//   description: owner of the repo
	//   type: string
	//   required: true
	// - name: repo
	//   in: path
	//   description: name of the repo
	//   type: string
	//   required: true
	// responses:
	//   "204":
	//     "$ref": "#/responses/empty"
	//   "404":
	//     "$ref": "#/responses/notFound"
	err := repo_service.DeleteAvatar(ctx, ctx.Repo.Repository)
	if err != nil {
		ctx.Error(http.StatusInternalServerError, "DeleteAvatar", err)
		return
	}

	ctx.Status(http.StatusNoContent)
}
